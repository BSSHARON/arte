<script>
	import { page } from "$app/state";
import { onMount } from "svelte";

    onMount(()=>{
        const params = page.url.searchParams;
        params.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    })
    </script>