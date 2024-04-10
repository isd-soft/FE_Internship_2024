<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref, computed } from 'vue'

const schema = yup.object({
    name:  yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
})

const { defineField, errors, handleSubmit } = useForm({
    validationSchema: schema
})

const [name, nameAttributeList] = defineField('name', {
    validateOnModelUpdate: false
})

const [email, emailAttributeList] = defineField('email', {
    validateOnModelUpdate: false
})

const [subject, subjectAttributeList] = defineField('subject', {
    validateOnModelUpdate: false
})

const [message, messageAttributeList] = defineField('message', {
    validateOnModelUpdate: false
})

const onSubmit = handleSubmit((values) => {
    const { name, email, subject, message } = values
    const result=true
    result ? emit('success') : emit('failure')
    alert(JSON.stringify(values, null, 2));
})

const emit = defineEmits(['success', 'failure', 'inputStart'])
</script>

<template>
    <form @submit="onSubmit" class="form-wrapper">
        <div class="form-wrapper__field">
            <label for="name" class="form-wrapper__label text-sm">Your name</label>
            <input 
            type="text" 
            class="form-wrapper__input text-sm"
            placeholder="ABC"
            v-model="name"
            v-bind="nameAttributeList"
            name="name"
            @focus="$emit('inputStart')"/>
            <span class="form-wrapper__error text-sm">{{ errors.name }}</span>
        </div>
        <div class="form-wrapper__field">
            <label for="email" class="form-wrapper__label text-sm">Email address</label>
            <input 
                type="email"
                class="form-wrapper__input text-sm" 
                placeholder="abs@def.com"
                v-model="email"
                v-bind="emailAttributeList"
                name="email"
                @focus="$emit('inputStart')"/>
            <span class="form-wrapper__error text-sm">{{ errors.email }}</span>
        </div>
        <div class="form-wrapper__field">
            <label for="subject" class="form-wrapper__label text-sm">Subject</label>
            <input 
                type="text" 
                class="form-wrapper__input text-sm" 
                placeholder="This is an optional"
                v-model="subject"
                v-bind="subjectAttributeList"
                name="subject"
                @focus="$emit('inputStart')"/>
            <span class="form-wrapper__error text-sm">{{ errors.subject }}</span>
        </div>
        <div class="form-wrapper__field">
            <label for="message" class="form-wrapper__label text-sm">Message</label>
            <textarea 
                type="text" 
                rows="5" 
                class="form-wrapper__input text-sm" 
                placeholder="Hi! i’d like to ask about"
                v-model="message"
                v-bind="messageAttributeList"
                name="message"
                @focus="$emit('inputStart')"/>
            <span class="form-wrapper__error text-sm">{{ errors.message }}</span>
        </div>
        <button  class="form-wrapper__button text-sm" >Submit</button>
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
        border: 1px solid var(--color-quick-silver);
        border-radius: .75rem;
        &::placeholder {
            color: var(--color-quick-silver);
        }
        &:focus{
            border: 1px solid var(--color-uc-gold);
        }
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
    &__error {
        color: var(--color-candy-pink);
        margin-bottom: 0.8rem;
        padding-left: 0.4rem;
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
        &__error{
            font-size: 2.4rem;
        }
    }
}
</style>