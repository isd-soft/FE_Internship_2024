<script setup>

</script>

<template>
    <form action="" class="form">
        <div class="form__field">
            <label for="name" class="form__label text-sm">Your name</label>
            <input type="text" class="form__input text-sm" placeholder="ABC">
        </div>
        <div class="form__field">
            <label for="email" class="form__label text-sm">Email address</label>
            <input type="email" class="form__input text-sm" placeholder="abs@def.com">
        </div>
        <div class="form__field">
            <label for="subject" class="form__label text-sm">Subject</label>
            <input type="text" class="form__input text-sm" placeholder="This is an optional">
        </div>
        <div class="form__field">
            <label for="message" class="form__label text-sm">Message</label>
            <textarea type="text" rows="5" class="form__input text-sm" placeholder="Hi! i’d like to ask about"/>
        </div>
        <button type="submit" class="form__button text-sm" >Submit</button>
    </form>
</template>

<style lang="scss" scoped>
.form{
    display: flex;
    gap: 1.5rem;
    width: 60%;
    max-width: 635px;
    flex-direction: column;
    &__field{
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
    &__label{
        font-weight: 500;
    }
    &__input{
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-color: var(--color-quick-silver);
        border-width: 1px;
        border-radius: .75rem;
    }
    &__button{
        background-color:var(--color-uc-gold);
        border-color: var(--color-uc-gold);
        color: var(--color-white);
        border-width: 1px;
        border-radius: .25rem;
        width: fit-content;
        transition-duration: .3s;
        margin-top: 1.6rem;
        padding-top: .75rem;
        padding-bottom: .75rem;
        padding-left: 4rem;
        padding-right: 4rem;
        &:hover{
            background-color: var(--color-white);
            border-color: var(--color-white);
            color: var(--color-uc-gold);
        }
    }
}
</style>