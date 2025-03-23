import { defineQuery } from "next-sanity";

export const ALL_VANS_QUERY = defineQuery(`*[_type == 'van'
 && defined(slug.current)]{
  slug{
    current
  },
  mainImage{
    asset->{
      url
    },
    alt
  },
  name,
  price,
  type
 }`);

export const VAN_DETAIL_QUERY = defineQuery(`*[_type == 'van'
 && slug.current == $slug][0]{
  slug{
    current
  },
  mainImage{
    asset->{
      url
    },
    alt
  },
  name,
  price,
  type,
  description
 }`)

export const MAIN_NAVBAR_QUERY = defineQuery(`*[_type == 'navbar'
  && slug.current == 'main-navbar'][0]{
  navlink[]->{
    name,
    url
  }
  }`)

export const HOST_NAVBAR_QUERY = defineQuery(`*[_type == 'navbar'
  && slug.current == 'host-navbar'][0]{
  navlink[]->{
    name,
    url
  }
  }`)

export const HOST_VAN_DETAIL_QUERY = defineQuery(`*[_type == 'navbar'
  && slug.current == 'host-van-navbar'][0]{
  navlink[]->{
    name,
    url
  }
  }`)

 