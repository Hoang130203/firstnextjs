'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect, useState } from 'react'
import { resources } from '@/api/data'
import ResourceHightlight from '@/components/ResourceHightlight'
import NewsLetter from '@/components/Newsletter'
import ResourceList from '@/components/ResourceList'
import Footer from '@/components/Footer'

export default function Home() {
  const [data, setData] = useState(null)
  const fetchData = async () => {

    try {
      const response = await fetch('/api/example');
      if (response.ok) {
        const result = await response.json();
        await alert(result.message)
        setData(1);
      } else {
        throw new Error('Error fetching data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <button onClick={fetchData}>abc</button>
      <ResourceHightlight
        resources={resources}
      />
      <NewsLetter />
      <ResourceList
        resources={resources}
      />
      {JSON.stringify(resources)}
    </React.Fragment>
  )
}
