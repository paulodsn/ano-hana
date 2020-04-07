<script>
    import Badge from '../Badge/Badge.svelte';

    export let image;
    export let tags = [];
</script>
<div class="flex flex-col bg-white rounded overflow-hidden shadow-lg mt-4">
    <img
        class="w-full card-image-height"
        src="{ image }"
        alt="Jintan"
    >
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
            <slot name="title" />
        </div>
        <p class="text-gray-700 text-base">
            <slot />
        </p>
    </div>
    <div class="px-6 py-4 mt-auto">
        {#each tags as tag}
            <Badge>
                { tag }
            </Badge>
        {/each}
    </div>
</div>

<style type="text/postcss">
.card-image-height {
    max-height: 24rem;
}
</style>