<script setup>
import { useContactStore } from "@/stores/contactStore";
import { onBeforeMount,ref } from "vue";
import * as yup from 'yup';
import { useForm } from 'vee-validate'
import Loader from "@/assets/icons/LoaderIcon.svg"
const store = useContactStore()



onBeforeMount(()=>{
        store.fetchContactInformation()
    })

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/    

const schema = yup.object({
address: yup.string(),
country: yup.string(),
geoCoordinates: yup.string(),
phoneNumber1: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
phoneNumber2: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
email1: yup.string().email(),
email2: yup.string().email(),
worktime: yup.string(),
})

const time=ref("")
const hour1=ref("")
const hour2=ref("")
const { errors, handleSubmit, } = useForm({
    validationSchema: schema
})


const onSubmit=handleSubmit(()=>{
    console.log('submit')
    store
    .postContactInfo()
    .then((res) => (res ? console.log('success') : console.log('failure')))
    .catch((err) => console.log('failure'))
})

const onCancel=()=>{
    console.log(`${time.value}: ${hour1.value} - ${hour2.value}`)
}

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
                        name="address"
                        class="admin-contact__input text-sm"
                        >
                        <span class="register-form__error">{{ errors.address }}</span>
                        <div class="admin-contact__city-country-wrapper">
                            <div class="admin-contact__field">
                                <label for="country" class="admin-contact__label text-sm">Country</label>
                                <input 
                                    type="text" 
                                    class="admin-contact__input text-sm"
                                    v-model="store.contactInformation.country"
                                    />
                            </div>
                            <div class="admin-contact__field">
                                <label for="city" class="admin-contact__label text-sm">City</label>
                                <input 
                                    type="text" 
                                    class="admin-contact__input text-sm"
                                    v-model="store.contactInformation.city"
                                    />
                            </div>
                        </div>
                    </div>
                    <div class="admin-contact__field">
                        <label for="Work time" class="admin-contact__label text-sm">Work Time</label>
                        <div class="admin-contact__time-wrapper text-sm" v-for="(item) in store.contactInformation.workTime" :key="item.id">
                            <p class="text-sm">{{ item }}</p>
                        </div>
                        <div class="admin-contact__time-wrapper">
                            <select id="days" class="admin-contact__input text-sm" v-model="time">
                                <option >Monday-Friday</option>
                                <option >Saturday-Sunday</option>
                            </select>
                            
                            <div class="admin-contact__hours-wrapper">
                                <input type="time" class="admin-contact__input text-sm" v-model="hour1">
                                <p class="text-4xl">-</p>
                                <input type="time" class="admin-contact__input text-sm" v-model="hour2" >
                            </div>
                            
                        </div>
                        <p>{{ worktime }}</p>
                    </div>
                    
                    <div class="admin-contact__field">
                        <label for="Phones" class="admin-contact__label text-sm">Phone Numbers</label>
                        <div class="admin-contact__time-wrapper text-sm" v-for="(item) in store.contactInformation.phoneNumber" :key="item.id">
                            <p class="text-sm">{{ item }}</p>
                        </div>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="Phones"
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.phoneNumber[0]"
                            />
                            <input 
                            type="tel" 
                            id="phone" 
                            name="Phones"
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.phoneNumber[1]"
                            />
                    </div>
                    <div class="admin-contact__field">
                        <label for="Coordinates" class="admin-contact__label text-sm">Coordinates</label>
                        <textarea 
                            type="text" 
                            rows="6" 
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.geoCoordinates"/>
                    </div>
                    <div class="admin-contact__field">
                        <label for="email" class="admin-contact__label text-sm">Email address</label>
                        <div class="admin-contact__time-wrapper text-sm" v-for="(item) in store.contactInformation.email" :key="item.id">
                            <p class="text-sm">{{ item }}</p>
                        </div>
                        <input 
                            type="email"
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.email[0]"
                            >
                            <input 
                            type="email"
                            class="admin-contact__input text-sm" 
                            v-model="store.contactInformation.email[1]"
                            >
                    </div>
                    
                </form>
            <div class="admin-contact__buttons-wrapper">
                    <button class="admin-contact__button button_modify primary-button " @click="onSubmit">Modify</button>
                    <button class="admin-contact__button button_cancel primary-button " @click="onCancel">Cancel</button>
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