<script setup>
    import { ref } from 'vue'
    const greeting = ref('Hello World!')
    import { ModalsContainer, useModal } from 'vue-final-modal'
    import 'vue-final-modal/style.css'

    const { open, close } = useModal({
        attrs: {
            title: 'Hello World!',
            onConfirm() {
                close()
            },
        },
        slots: {
            default: '<p>The content of the modal</p>',
        },
    })

</script>

<template>
    <p class="greeting">{{ greeting }}</p>
    <VButton @click="open">
        Open Modal
    </VButton>
    
</template>

<style>
    .greeting {
        color: red;
        font-weight: bold;
    }
</style>