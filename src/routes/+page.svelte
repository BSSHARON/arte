<script>
	import Banner from '$lib/components/Banner.svelte';
    import Subscribe from '$lib/components/Subscribe.svelte';
    import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title="Arte | אמנות "
  description="אומנות דיגיטלית מודרנית תמונות שונות וייחודית. ציור על קנבס ציורי שמן וכלים מבטון בעבודת יד"
  canonical="https://www.arte-bs.com/"
  keywords="art, אומנות, אמנות, ציורי שמן"
  openGraph={{
    title: "Arte | אמנות ",
    description:"אומנות דיגיטלית מודרנית תמונות שונות וייחודית. ציור על קנבס ציורי שמן וכלים מבטון בעבודת יד",
    url: "https://www.arte-bs.com/",
    type: "website",
    images: [
      {
        url: "https://www.arte-bs.com/images/left-banner-image.jpg",
        width: 800,
        height: 600,
        alt: "Squatting",
      },
      {
        url: "https://www.arte-bs.com/images/left-banner-image.jpg",
        width: 900,
        height: 800,
        alt: "Crawling",
      },
      {
        url: "https://www.arte-bs.com/images/left-banner-image.jpg",
        alt: "Jumping",
      },
      {
        url: "https://www.arte-bs.com/images/left-banner-image.jpg",
      },
    ],
    site_name: "Primal Movement",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@ArteBS",
    title: "Arte | אמנות ",
    description:
      "אומנות דיגיטלית מודרנית תמונות שונות וייחודית. ציור על קנבס ציורי שמן וכלים מבטון בעבודת יד",
    image: "https://www.arte-bs.com/images/left-banner-image.jpg",
  }}
  facebook={{
    appId: "1234567890",
  }}
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arte | אמנות ",
    description:
      "אומנות דיגיטלית מודרנית תמונות שונות וייחודית. ציור על קנבס ציורי שמן וכלים מבטון בעבודת יד",
    url: "https://www.arte-bs.com/",
  }}
/>

<Banner />
<Subscribe />