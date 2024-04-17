<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
    name:  yup.string().required("This field is empty!"),
    email: yup.string().email("Please write your email correctly").required("This field is empty!"),
    subject: yup.string(),
    message: yup.string().required("This field is empty!")
})


const { defineField, errors, handleSubmit,resetForm } = useForm({
    validationSchema: schema,
    
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
    const result=true
    result ? emit('success') : emit('failure')
    alert(JSON.stringify(values, null, 2));
    resetForm();
})

const emit = defineEmits(['success', 'failure', 'inputStart'])
</script>

<template>
    <form @submit="onSubmit" class="form-wrapper">
        <div class="form-wrapper__field">
            <label for="name" class="form-wrapper__label text-sm">Your name*</label>
            <div class="form-wrapper__field-wrapper">
                <input 
                    type="text" 
                    class="form-wrapper__input text-sm"
                    :class="{errorfield:errors.name}"
                    placeholder="ABC"
                    v-model="name"
                    v-bind="nameAttributeList"
                    name="name"
                    @focus="$emit('inputStart')"/>
                <span class="form-wrapper__error text-sm">{{ errors.name }}</span>
            </div>
        </div>
        <div class="form-wrapper__field">
            <label for="email" class="form-wrapper__label text-sm">Email address*</label>
            <div class="form-wrapper__field-wrapper">
                <input 
                    type="email"
                    class="form-wrapper__input text-sm"
                    :class="{errorfield:errors.email}"
                    placeholder="abs@def.com"
                    v-model="email"
                    v-bind="emailAttributeList"
                    name="email"
                    @focus="$emit('inputStart')"/>
                <span class="form-wrapper__error text-sm">{{ errors.email }}</span>
            </div>
            
        </div>
        <div class="form-wrapper__field">
            <label for="subject" class="form-wrapper__label text-sm">Subject</label>
            <div class="form-wrapper__field-wrapper">
                <input 
                    type="text" 
                    class="form-wrapper__input text-sm"
                    :class="{errorfield:errors.subject}"
                    placeholder="This is an optional"
                    v-model="subject"
                    v-bind="subjectAttributeList"
                    name="subject"
                    @focus="$emit('inputStart')"/>
                <span class="form-wrapper__error text-sm">{{ errors.subject }}</span>
            </div>
            
        </div>
        <div class="form-wrapper__textarea-wrapper">
            <label for="message" class="form-wrapper__label text-sm">Message*</label>
            <div class="form-wrapper__textarea-field">
            <textarea 
                type="text" 
                class="form-wrapper__input text-sm"
                :class="{errorfield:errors.message}"
                placeholder="Hi! i’d like to ask about"
                v-model="message"
                v-bind="messageAttributeList"
                name="message"
                rows="5"
                @focus="$emit('inputStart')"/>
            <span class="form-wrapper__error text-sm"> {{ errors.message }}</span>
            </div>
        
        </div>
        <button  class="form-wrapper__button text-sm primary-button" >Submit</button>
        <span class="form-wrapper__warning text-sm">* means the frield is required</span>
    </form>
</template>

<style lang="scss" scoped>
.form-wrapper{
    &__field-wrapper{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    &__field{
        display: flex;
        flex-direction: column;
        gap: 22px;
        grid-column: 1 / 1;
    }
    &__textarea-wrapper{
        display: flex;
        flex-direction: column;
        gap: 22px;
        grid-column: 2 / 2;
        grid-row: 1 / span 3;
    }
    &__textarea-field{
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 100%;
    }
    &__label{
        font-weight: 500;
    }
    &__input{
        padding: 20px 35px;
        border: 1px solid var(--color-quick-silver);
        border-radius: .75rem;
        resize: none;
        height: 100%;
        &::placeholder {
            color: var(--color-quick-silver);
        }
        &:focus{
            border: 1px solid var(--color-uc-gold);
        }
    }
    &__button{
        border-radius: .5rem;
        padding: 1.4rem 9rem;
        grid-column: 2 / 2;

    
    }
    &__warning{
        grid-column: 2 / 2;
    }
    &__error {
        color: var(--color-candy-pink);
        padding-left: 0.4rem;
        }
}
.errorfield{
    border: 1px solid var(--color-candy-pink);
}
@media only screen and (max-width: 768px) {
    .form-wrapper{
        &__label{
            font-size: 2.4rem;
        }
        &__input{
            padding: 15px;
            font-size: 2.4rem;
        }
        &__error{
            font-size: 2.4rem;
        }
        &__button{
            font-size: 4rem;
        }
    }
}
</style>