<script setup>
import { useContactStore } from "@/stores/contactStore";
import { onBeforeMount,ref } from "vue";
import Loader from "@/assets/icons/LoaderIcon.svg"
const store = useContactStore()



onBeforeMount(()=>{
        store.fetchContactInformation()
    })

// const schema = yup.object({
// address: yup.string().required("This field is required"),
// country: yup.string().required(),
// geoCoordinates: yup.string(),
// phoneNumber1: yup.string(),
// phoneNumber2: yup.string(),
// email1: yup.string().required().email(),
// email2: yup.string().email(),
// })

const hourFriday1=ref("09:00")
const hourFriday2=ref("22:00")
const hourSaturday1=ref("09:00")
const hourSaturday2=ref("20:00")
const edit=ref(true)

// const {  handleSubmit,defineField } = useForm({
//     validationSchema: schema,
// })

const onEdit=()=>{
    edit.value=!edit.value
}

const onSubmit=()=>{
    console.log('submit')
    store
    .postContactInfo([`Monday-Friday: ${hourFriday1.value} - ${hourFriday2.value}`,`Saturday-Sunday: ${hourSaturday1.value} - ${hourSaturday2.value}`])
    .then((res) => (res ? console.log('success') : console.log('failure')))
    .catch(() => console.log('failure'))
}

const onCancel=()=>{
    edit.value=!edit.value
    store.fetchContactInformation()
}

// const [address,addressAttributeList] = defineField('address', {
//     validateOnModelUpdate: false
    
// })
</script>
<template>
    <section class="admin-contact" v-if="store.loader">
        <div class="admin-contact__container">
            <div class="admin-contact__name">
                <h3 class="admin-contact__name-text text-4xl">Contact Information</h3>
            </div>
                <form class="admin-contact__form-wrapper" @submit="onSubmit">
                    <div class="admin-contact__field">
                        <label for="address" class="admin-contact__label text-sm">Address</label>
                        <input
                        type="text"
                        v-model="store.contactInformation.address"
                        :name="address"
                        class="admin-contact__input text-sm"
                        :disabled="edit"
                        required
                        >
                        <div class="admin-contact__city-country-wrapper">
                            <div class="admin-contact__field">
                                <label for="country" class="admin-contact__label text-sm">Country</label>
                                <input 
                                    type="text" 
                                    class="admin-contact__input text-sm"
                                    v-model="store.contactInformation.country"
                                    :disabled="edit"
                                    />
                            </div>
                            <div class="admin-contact__field">
                                <label for="city" class="admin-contact__label text-sm">City</label>
                                <input 
                                    type="text" 
                                    class="admin-contact__input text-sm"
                                    v-model="store.contactInformation.city"
                                    :disabled="edit"
                                    />
                            </div>
                        </div>
                    </div>
                    <div class="admin-contact__field">
                        <label for="Work time" class="admin-contact__label text-sm">Work Time</label>
                        <div class="admin-contact__time-wrapper">
                            <span class="admin-contact__time-text text-sm">Monday-Friday:</span>
                            
                            <div class="admin-contact__hours-wrapper">
                                <input type="time" class="admin-contact__input text-sm" v-model="hourFriday1" :disabled="edit">
                                <p class="text-4xl">-</p>
                                <input type="time" class="admin-contact__input text-sm" v-model="hourFriday2" :disabled="edit">
                            </div>
                            
                        </div>
                        <div class="admin-contact__time-wrapper">
                            <span class="admin-contact__time-text text-sm">Saturday-Sunday:</span>
                            
                            <div class="admin-contact__hours-wrapper">
                                <input type="time" class="admin-contact__input text-sm" v-model="hourSaturday1" :disabled="edit">
                                <p class="text-4xl">-</p>
                                <input type="time" class="admin-contact__input text-sm" v-model="hourSaturday2" :disabled="edit">
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="admin-contact__field">
                        <label for="Phones" class="admin-contact__label text-sm">Phone Numbers</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="Phones"
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.phoneNumber[0]"
                            :disabled="edit"
                            />
                            <input 
                            type="tel" 
                            id="phone" 
                            name="Phones"
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.phoneNumber[1]"
                            :disabled="edit"
                            />
                    </div>
                    <div class="admin-contact__field">
                        <label for="Coordinates" class="admin-contact__label text-sm">Coordinates</label>
                        <textarea 
                            type="text" 
                            rows="6" 
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.geoCoordinates"
                            :disabled="edit"/>
                    </div>
                    <div class="admin-contact__field">
                        <label for="email" class="admin-contact__label text-sm">Email address</label>
                        <input 
                            type="email"
                            class="admin-contact__input text-sm" 
                            :name="email1"
                            v-model="store.contactInformation.email[0]"
                            :disabled="edit"
                            >
                            <input 
                            type="email"
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.email[1]"
                            :disabled="edit"
                            >
                    </div>
                    
                </form>
            <div class="admin-contact__buttons-wrapper">
                    <button class="admin-contact__button button_modify primary-button " @click="onEdit" :style="edit ? '' : 'display:none' " >Edit</button> 
                    <button class="admin-contact__button button_edit primary-button " @click="onSubmit" :style="edit ? 'display:none': '' " >Modify</button>
                    <button class="admin-contact__button button_cancel primary-button " @click="onCancel" :style="edit ? 'display:none': '' ">Cancel</button>
                    </div>
            </div>
    </section>
    <div class="loader" v-else>
        <Loader/>
    </div>
</template>

<style lang="scss" scoped>
    .admin-contact{
        background-color: var(--color-linen);
        &__container{
            display: flex;
            flex-direction: column;
            padding: 5rem  10rem 0 15rem;
            gap:3rem;
        }
        &__form-wrapper{
            display: flex;
            flex-wrap: wrap;
            column-gap: 5rem;
            row-gap: 2rem;
            
        }
        &__city-country-wrapper{
            display: flex;
            justify-content: space-between;
        }
        &__field{
            display: flex;
            flex-direction: column;
            width: 45%;
            gap: 22px;
        }
        &__label{
            font-weight: 500;
        }
        &__input{
            padding: 10px 15px;
            border: 1px solid var(--color-quick-silver);
            border-radius: .75rem;
            resize: none;
            &::placeholder {
                color: var(--color-quick-silver);
            }
            &:focus{
                border: 1px solid var(--color-uc-gold);
            }

        }
        &__time-wrapper{
            display: flex;
            justify-content: space-between;
        }
        &__time-text{
            display:flex;
            align-items: center;
        }
        &__hours-wrapper{
            display: flex;
        }
        &__buttons-wrapper{
            display: flex;
            justify-content: end;
            gap: 5rem;
        }
        &__button{
            border-radius: 1rem;
            padding: 1.4rem 9rem;
        }

}
.button_cancel{
    background-color: var(--color-candy-pink);
    &:hover {
    background-color: var(--color-white);
    color: var(--color-candy-pink);
    }
}
.button_edit{
    background-color: var(--color-blue-green);
    &:hover {
    background-color: var(--color-white);
    color: var(--color-blue-green);
    }
}
.errorfield{
    border: 1px solid var(--color-candy-pink);
}
@media only screen and (max-width:1024px) {
    .admin-contact{
        &__form-wrapper{
            flex-direction: column;
        }
    }
}
@media only screen and (max-width:786px) {
    .admin-contact{
        &__field{
            width: 100%;
        }
        &__city-country-wrapper{
            display: flex;
            flex-direction: column;
            gap: 22px;
        }
    }
}
@media only screen and (max-width:476px) {
    .admin-contact{
        &__form-wrapper{
            width: 100%;
        }
        &__time-wrapper{
            flex-direction: column;
        }
        &__buttons-wrapper{
            flex-direction: column;
        }
    }
}
</style>