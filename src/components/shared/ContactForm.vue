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

const emit = defineEmits(['success', 'failure'])
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
                    />
                <span class="form-wrapper__error text-xs">{{ errors.name }}</span>
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
                    />
                <span class="form-wrapper__error text-xs">{{ errors.email }}</span>
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
                    />
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
                />
            <span class="form-wrapper__error text-xs" style="top:2%"> {{ errors.message }}</span>
            </div>
        </div>
            <div class="form-wrapper__button-text-wrapper">
                <span class="form-wrapper__warning text-sm">* the field is required</span>
                <button  class="form-wrapper__button text-sm primary-button" >Submit</button>
            </div>
    </form>
</template>

<style lang="scss" scoped>
.form-wrapper{
    &__field-wrapper{
        display: flex;
        flex-direction: column;
        
    }
    &__field{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        grid-column: 1 / 1;
        position: relative;
    }
    &__textarea-wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;        
        grid-column: 2 / 2;        
        grid-row: 1 / span 2;
    }
    &__textarea-field{        
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    &__label{
        font-weight: 500;
    }
    &__input{
        font-size: 14px;
        padding: 12px 12px;
        border: 1px solid var(--color-quick-silver);
        border-radius: 10px;
        resize: none;
        margin-bottom: 2px;
        height: 100%;
        &::placeholder {
            color: var(--color-quick-silver);
        }
        &:focus{
            border: 1px solid var(--color-uc-gold);
        }
    }
    &__button-text-wrapper{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    &__button{
        border-radius: .5rem;
        padding: 1.4rem 7rem;
    }
    &__error {
        color: var(--color-candy-pink);
        font-size: 10px;
        padding-left: 4px;
        height: 16px;
        }
}
.errorfield{
    border: 1px solid var(--color-candy-pink);
}

@media only screen and (max-width: 575px) {
    .form-wrapper{

    &__input{
        font-size: 12px;
    }
}
}

</style>