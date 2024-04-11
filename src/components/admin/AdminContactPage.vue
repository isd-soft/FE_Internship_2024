<script setup>
    import { ref } from 'vue'
    const phone=ref('')

    console.log(phone.value)
</script>


<template>
    <section class="admin-contact">
        <div class="admin-contact__container">
            <div class="admin-contact__name">
                <h3 class="admin-contact__name-text text-4xl">Contact Information</h3>
            </div>
                <form class="admin-contact__form-wrapper">
                    <div class="admin-contact__field">
                        <label for="address" class="admin-contact__label text-sm">Address</label>
                        <input 
                        type="text" 
                        class="admin-contact__input text-sm"
                        placeholder="str. Bulgara 33/1, et. 3"/>
                    </div>
                    <div class="admin-contact__field">
                        <label for="Work time" class="admin-contact__label text-sm">Work Time</label>
                        <p class="text-xs">Monday-Friday: 9:00 - 22:00</p>
                        <p class="text-xs">Saturday-Sunday: 9:00 - 21:00</p>
                        <div class="admin-contact__time-wrapper">
                            <input name="city" list="days"  class="admin-contact__input text-sm"  placeholder="Saturday-Sunday"/>
                            <datalist id="days">
                                <option value="Monday-Friday" />
                                <option value="Saturday-Sunday" />
                            </datalist>
                            <div class="admin-contact__hours-wrapper">
                                <input type="time" class="admin-contact__input text-sm" value="09:00">
                                <p class="text-4xl">-</p>
                                <input type="time" class="admin-contact__input text-sm" value="22:00">
                            </div>
                        </div>
                    </div>
                    <div class="admin-contact__field">
                        <label for="Coordinates" class="admin-contact__label text-sm">Coordinates</label>
                        <textarea 
                            type="text" 
                            rows="6" 
                            class="admin-contact__input text-sm" 
                            placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825."/>
                    </div>
                    <div class="admin-contact__field">
                        <label for="Phones" class="admin-contact__label text-sm">Phone Numbers</label>
                        <p class="text-xs">Monday-Friday: 9:00 - 22:00</p>
                        <p class="text-xs">Saturday-Sunday: 9:00 - 21:00</p>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="Phones"
                            class="admin-contact__input text-sm" 
                            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                            placeholder="This is an optional"
                            v-model="phone"/>
                    </div>
                    <div class="admin-contact__field">
                        <label for="email" class="admin-contact__label text-sm">Email address</label>
                        <p class="text-xs">Monday-Friday: 9:00 - 22:00</p>
                        <p class="text-xs">Saturday-Sunday: 9:00 - 21:00</p>
                        <input 
                            type="email"
                            class="admin-contact__input text-sm" 
                            placeholder="abs@def.com"
                            v-model="email">
                    </div>
                </form>
            <div class="admin-contact__buttons-wrapper">
                <button class="admin-contact__button button_modify primary-button ">Modify</button>
                <button class="admin-contact__button button_cancel primary-button ">Cancel</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .admin-contact{
        background-color: var(--color-linen);
        &__container{
            display: flex;
            flex-direction: column;
            padding: 5rem  5rem 0 5rem;
            gap:3rem;
        }
        &__form-wrapper{
            display: flex;
            flex-wrap: wrap;
            column-gap: 5rem;
            row-gap: 2rem;
            
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
            gap: 9rem;
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