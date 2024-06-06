<script>
    import {mount} from 'svelte';
    import Index from "./dist/index.js";
    let target = $state();
    $effect(()=>{
        if (target)
            mount(Index, {target: document.body});
    });
</script>

<div bind:this={target}></div>