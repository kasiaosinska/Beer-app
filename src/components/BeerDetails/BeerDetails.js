import React from 'react'
import {
  BoldText,
  Box,
  BottomBox,
  Details,
  Description,
  Image,
  ImageBox,
  ListElement,
  List,
  LinkElement,
  Modal,
  ModalContent,
  Title,
  Tagline,
  TopBox,
  Wrapper
} from './styled'
import _Text from '../../common/Text/Text'
import Loader from '../../common/Loader/Loader'
import { fetchSingleBeer, fetchSimilarBeers } from '../../api'

class BeerDetails extends React.Component {

  state = {
    beer: {},
    similarBeers: [],
    error: false,
    errorSimilarBeers: false,
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getData()
    }
  }

  getData = () => {
    const { match } = this.props

    fetchSingleBeer(match.params.id)
      .then((beerResult) => {
        const beerDetails = beerResult[0]
        this.setState({
          beer: beerDetails,
        })
        fetchSimilarBeers(beerDetails.abv, beerDetails.ibu, beerDetails.ebc)
          .then((similarBeerResult) => {
            const similarBeersList = similarBeerResult.filter(beer => beer.id !== beerDetails.id).splice(0, 3)
            this.setState({
              similarBeers: similarBeersList,
            })
          })
          .catch(() => {
            this.setState({
              errorSimilarBeers: true
            })
          })
      })
      .catch(() => {
        this.setState({
          error: true
        })
      })
  }

  closeModal = (event) => {
    event.stopPropagation()
    if (event.target.classList.contains('overlay')) {
      this.props.history.push('/')
    }
  };

  render() {
    const { beer, error, errorSimilarBeers, similarBeers } = this.state

    return(
      <Wrapper className="overlay" onClick={this.closeModal}>
        <Modal>
          {error ?
            <_Text>Something went wrong :(</_Text>
            :
            Object.keys(beer).length !== 0 ?
              <ModalContent>
                <TopBox>
                  <ImageBox>
                    <Image src={beer.image_url} alt={`${beer.name}`} />
                  </ImageBox>
                  <div>
                    <Title>{beer.name}</Title>
                    <Tagline>{beer.tagline}</Tagline>
                    <Box>
                      <Details><BoldText>IBU:</BoldText>{beer.ibu || '-'}</Details>
                      <Details><BoldText>ABV:</BoldText>{beer.abv || '-'}%</Details>
                      <Details><BoldText>EBC:</BoldText>{beer.ebc || '-'}</Details>
                    </Box>
                    <Description>{beer.description}</Description>
                    <Box>
                      <BoldText>Best served with:</BoldText>
                      <ul>
                        {beer.food_pairing && beer.food_pairing.map((food, index) =>
                          <ListElement key={index}>- {food}</ListElement>
                        )}
                      </ul>
                    </Box>
                  </div>
                </TopBox>
                <BottomBox>
                  <BoldText>You might also like:</BoldText>
                  <Box>
                    <List>
                      {errorSimilarBeers ?
                        <BoldText>Something went wrong :(</BoldText>
                        :
                        (similarBeers ? (similarBeers.length !== 0 ? similarBeers.map(similarBeer => (
                          <LinkElement
                            key={similarBeer.id}
                            to={{ pathname: `/details/${similarBeer.id}`, state: { modal: true } }}
                          >
                            <div>
                              <img src={similarBeer.image_url} alt={similarBeer.name}/>
                            </div>
                            <BoldText>{similarBeer.name}</BoldText>
                          </LinkElement>
                        ))
                        : <BoldText>There are no matching beers</BoldText>)
                          : <Loader
                            key={0}
                            color="#479019"
                            size={50}
                          />
                        )
                      }
                    </List>
                  </Box>
                </BottomBox>
              </ModalContent>
            : <Loader
                key={0}
                color="#479019"
                size={50}
              />
          }
        </Modal>
      </Wrapper>
    )
  }
}

export default BeerDetails
