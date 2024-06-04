// import React from 'react'
import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers';




export const SearchPage = () => {

  const navigate = useNavigate();
  const location =  useLocation();
  // yarn add query-string

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;
  
  const{ searchText, onInputChange} = useForm({
    searchText: q
  })


const onSearchSubmit = (e) => {
  e.preventDefault();

  // if (searchText.trim().length <=1) return;
  
  // navigate(`?q=${ searchText.toLowerCase().trim()}`)
  navigate(`?q=${ searchText }`)



  // console.log({searchText});
}


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
          <div className='col-5'> 
          <h4>Busqueda..</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
            type="text" 
            placeholder='Search a heero'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={ searchText }
            onChange={ onInputChange }

            />
            <button className='btn btn-outline-primary mt-2'>Search</button>
          </form>

          </div>
          <div className='col-7'>  
            <h4>Result</h4>
            <hr />
            {
              // (q === '')
              //   ? <div className='alert alert-primary'>  Search a hero  </div>
              //   : (heroes.length === 0) 
              //   &&  <div className='alert alert-danger'>  No hero with { q }</div>

            }

            <div className='alert alert-primary' style={{display: showSearch ? '' : 'none'}}>  Search a hero  </div>
            <div className='alert alert-danger' style={{display: showError ? '' : 'none'}}>  No hero with { q }</div>

            {
              heroes.map(hero=> (

                <HeroCard key={hero.id} {...hero}/>
              ))
            }
          </div>
      </div>
    </>
  )
}
