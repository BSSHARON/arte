<script>
     import SvelteSeo from "svelte-seo";
     let { title ="Arte | אמנות " , description ="אומנות דיגיטלית מודרנית תמונות שונות וייחודית. ציור על קנבס ציורי שמן וכלים מבטון בעבודת יד",url = '', 
     keywords="art, אומנות, אמנות, ציורי שמן",
      image1 = "https://www.arte-bs.com/images/left-banner-image.jpg",
        image2 = "https://www.arte-bs.com/images/left-banner-image.jpg",
        image3 = "https://www.arte-bs.com/images/left-banner-image.jpg",
        image4 = "https://www.arte-bs.com/images/left-banner-image.jpg",
        } = $props();
</script>

<SvelteSeo
  title={title}
  description={description}
  canonical={"https://www.arte-bs.com"+url}
  keywords={keywords}
  openGraph={{
    title:title,
    description:description,
    url: "https://www.arte-bs.com"+url,
    type: "website",
    images: [
      {
        url: image1,
        width: 800,
        height: 600,
        alt: "Squatting",
      },
      {
        url: image2,
        width: 900,
        height: 800,
        alt: "Crawling",
      },
      {
        url: image3,
        alt: "Jumping",
      },
      {
        url: image4,
      },
    ],
    site_name: title,
  }}
  twitter={{
    card: "summary_large_image",
    site: "@ArteBS",
    title: title,
    description:
      description,
    image: image1,
  }}
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description:description,
    url: "https://www.arte-bs.com"+url,
  }}
/>