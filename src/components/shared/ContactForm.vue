<script setup>

</script>

<template>
    <form action="" class="form-wrapper">
        <div class="form-wrapper__field">
            <label for="name" class="form-wrapper__label text-sm">Your name</label>
            <input type="text" class="form-wrapper__input text-sm" placeholder="ABC">
        </div>
        <div class="form-wrapper__field">
            <label for="email" class="form-wrapper__label text-sm">Email address</label>
            <input type="email" class="form-wrapper__input text-sm" placeholder="abs@def.com">
        </div>
        <div class="form-wrapper__field">
            <label for="subject" class="form-wrapper__label text-sm">Subject</label>
            <input type="text" class="form-wrapper__input text-sm" placeholder="This is an optional">
        </div>
        <div class="form-wrapper__field">
            <label for="message" class="form-wrapper__label text-sm">Message</label>
            <textarea type="text" rows="5" class="form-wrapper__input text-sm" placeholder="Hi! i’d like to ask about"/>
        </div>
        <button type="submit" class="form-wrapper__button text-sm" >Submit</button>
    </form>
</template>

<style lang="scss" scoped>
.form-wrapper{
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
        padding: 20px 35px;
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
@media only screen and (max-width: 768px) {
    .form-wrapper{
        &__label{
            font-size: 2.4rem;
        }
        &__input{
            font-size: 2.4rem;
        }
    }
}
</style>