import React from 'react'
import { api } from '../services/api'

interface HomeProps {
  count: number
}

interface HomeServerSideProps {
  props: HomeProps
}

export default function Home(props: HomeProps): JSX.Element {
  return <h1>Contagem: {props.count}</h1>
}

export const getServerSideProps = async (): Promise<HomeServerSideProps> => {
  const response = await api.get('/pool/count')

  return {
    props: {
      count: response.data.count
    }
  }
}
