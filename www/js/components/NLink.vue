<template>
    <a v-if='url' :href='url'>
        <slot />
    </a>
</template>

<script>
    // Import JQuery
    import $ from 'jquery';

    // Export component
    module.exports {
        // Data komponenty
        data: function() {
            return {
                url: ''
            }
        },
        // Atributy komponenty
        props: ['to', 'params', 'anchor'],
        // Když je componenta vytvořena
        created() {
            // Když je DOM načten, požádáme o link
            Vue.nextTick(() => {
                // Zažádá server o adresu
                $.get('/api/get-link', {
                    // Cílová destinace
                    dest: this.to,
                    // Query parametry cílové URL
                    params: JSON.stringify(this.params)
                }, res => {
                    // Aktualizace URL proměnné
                    this.url = this.anchor ? `${res}#${this.anchor}` : res;
                });
            });
        }
    }
</script>
