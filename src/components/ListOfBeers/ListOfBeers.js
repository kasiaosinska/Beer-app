import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { LinkElement, Wrapper } from './styled'
import BeerDetails from '../BeerDetails/BeerDetails'
import Card from '../Card/Card'
import Loader from '../../common/Loader/Loader'
import _Text from '../../common/Text/Text'
import { fetchListOfBeers } from '../../api'

class ListOfBeers extends React.Component {

  state = {
    beers: [],
    page: 1,
    perPage: 20,
    initialLoad: true,
    hasMore: false,
    modal: false,
    error: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const { page, perPage, beers } = this.state

    fetchListOfBeers(page, perPage)
      .then((results) => {
        this.setState({
          beers: [...beers, ...results],
          page: page + 1,
          initialLoad: false,
          hasMore: results.length === perPage
        })
      })
      .catch(() => {
        this.setState({
          error: true
        })
      })
  }

  render() {
    const { beers, error, hasMore, initialLoad, modal } = this.state

    if (error) {
      return <_Text>Something went wrong :(</_Text>
    }

    return (
      <InfiniteScroll
        initialLoad={initialLoad}
        pageStart={0}
        loadMore={this.getData}
        hasMore={hasMore}
        loader={
          <Loader
            key={0}
            color="#479019"
            size={50}
            margin={40}
          />
        }
      >
        <Wrapper>
          {beers && beers.map(beer => (
            <LinkElement key={beer.id} to={{ pathname: `/details/${beer.id}`, state: { modal: true } }}>
              <Card
                image={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
              />
            </LinkElement>
          ))}
        </Wrapper>
        {hasMore === false && initialLoad === false && <_Text>No more beers</_Text>}
        {modal && <BeerDetails />}
     </InfiniteScroll>
    )
  }
}

export default ListOfBeers
