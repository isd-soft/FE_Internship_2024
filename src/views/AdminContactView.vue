<script setup>
import { useContactStore } from "@/stores/contactStore";
import { ref } from "vue";
import Plus from "@/assets/icons/PlusIcon.svg"
import Loader from "@/assets/icons/LoaderIcon.svg"
import Dash from "@/assets/icons/AdminContactDashIcon.svg"
import { createToast } from '@/components/generics/GenericToast.vue'
const store = useContactStore()

const hourFriday1 = ref("09:00")
const hourFriday2 = ref("22:00")
const hourSaturday1 = ref("09:00")
const hourSaturday2 = ref("20:00")
const edit = ref(true)
const plusFieldtel = ref(false)
const plusFieldemail = ref(false)

const onEdit = () =>
    edit.value = !edit.value

const onPlusFieldtel = () =>
    plusFieldtel.value = !plusFieldtel.value

const onPlusFieldemail = () =>
    plusFieldemail.value = !plusFieldemail.value


const onSubmit = () => {
    store
        .postContactInfo([`Monday-Friday: ${hourFriday1.value} - ${hourFriday2.value}`, `Saturday-Sunday: ${hourSaturday1.value} - ${hourSaturday2.value}`])
        .then((res) => {
            if (res) {
                createToast('Submit Successful', 'success')
                edit.value = !edit.value
            }
            else {
                createToast('Submit Failed', 'error')
            }
        }).catch((error) => {
            console.log(error)
        })
}

const onCancel = () => {
    edit.value = !edit.value
    store.fetchContactInformation()
    plusFieldtel.value = false
    plusFieldtel.value = false
}


</script>
<template>
    <section class="admin-contact" v-if="store.loader">
        <div class="admin-contact__container">
            <div class="admin-contact__name">
                <h3 class="admin-contact__name-text text-xl">Contact Information</h3>
            </div>
            <form class="admin-contact__form-wrapper">
                <div class="admin-contact__field">
                    <label for="address" class="admin-contact__label text-sm">Address</label>
                    <input type="text" v-model="store.contactInformation.address" name="address"
                        class="admin-contact__input text-sm" :disabled="edit" required>
                    <div class="admin-contact__city-country-wrapper">
                        <div class="admin-contact__field">
                            <label for="country" class="admin-contact__label text-sm">Country</label>
                            <input type="text" class="admin-contact__input text-sm"
                                v-model="store.contactInformation.country" :disabled="edit" />
                        </div>
                        <div class="admin-contact__field">
                            <label for="city" class="admin-contact__label text-sm">City</label>
                            <input type="text" class="admin-contact__input text-sm"
                                v-model="store.contactInformation.city" :disabled="edit" />
                        </div>
                    </div>
                </div>
                <div class="admin-contact__field">
                    <label for="Work time" class="admin-contact__label text-sm">Work Time</label>
                    <div class="admin-contact__time-wrapper">
                        <div class="admin-contact__hours-wrapper">
                            <input type="time" class="admin-contact__input text-sm" v-model="hourFriday1"
                                :disabled="edit">
                            <Dash style="width: 15px; height: 10px;" />
                            <input type="time" class="admin-contact__input text-sm" v-model="hourFriday2"
                                :disabled="edit">
                        </div>
                        <span class="admin-contact__time-text text-sm">Monday-Friday</span>

                    </div>
                    <div class="admin-contact__time-wrapper">

                        <div class="admin-contact__hours-wrapper">
                            <input type="time" class="admin-contact__input text-sm" v-model="hourSaturday1"
                                :disabled="edit">
                            <Dash style="width: 15px; height: 10px;" />
                            <input type="time" class="admin-contact__input text-sm" v-model="hourSaturday2"
                                :disabled="edit">
                        </div>

                        <span class="admin-contact__time-text text-sm">Saturday-Sunday</span>
                    </div>
                </div>

                <div class="admin-contact__field" v-if="store.contactInformation.phoneNumber.length == 1">
                    <div class="admin-contact__label-wrapper">
                        <label for="Phones" class="admin-contact__label text-sm">Phone Number</label>
                        <button type="button" class="admin-contact__svg-wrapper" :style="edit ? 'display: none' : ''"
                            @click="onPlusFieldtel">
                            <Plus class="admin-contact__svg" />
                        </button>
                    </div>
                    <input type="tel" id="phone" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.phoneNumber[0]" :disabled="edit" />
                    <input type="tel" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.phoneNumber[1]" :disabled="edit"
                        :style="plusFieldtel ? '' : 'display:none'" />

                </div>
                <div class="admin-contact__field" v-else>
                    <div class="admin-contact__label-wrapper">
                        <label for="Phones" class="admin-contact__label text-sm">Phone Number</label>
                    </div>
                    <input type="tel" id="phone" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.phoneNumber[0]" :disabled="edit" />
                    <input type="tel" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.phoneNumber[1]" :disabled="edit" />

                </div>
                <div class="admin-contact__field">
                    <label for="Coordinates" class="admin-contact__label text-sm">Coordinates</label>
                    <textarea type="text" rows="6" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.geoCoordinates" :disabled="edit" />
                </div>
                <div class="admin-contact__field" v-if="store.contactInformation.email.length == 1">
                    <div class="admin-contact__label-wrapper">
                        <label for="email" class="admin-contact__label text-sm">Email address</label>
                        <button type="button" class="admin-contact__svg-wrapper" @click="onPlusFieldemail">
                            <Plus class="admin-contact__svg" :style="edit ? 'display: none' : ''" />
                        </button>
                    </div>
                    <input type="tel" id="phone" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.email[0]" :disabled="edit" />
                    <input type="email" id="phone" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.email[1]" :disabled="edit"
                        :style="plusFieldemail ? '' : 'display:none'" />
                </div>
                <div class="admin-contact__field" v-else>
                    <div class="admin-contact__label-wrapper">
                        <label for="email" class="admin-contact__label text-sm">Email address</label>
                    </div>
                    <input type="tel" id="phone" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.email[0]" :disabled="edit" />
                    <input type="email" id="phone" name="phones" class="admin-contact__input text-sm"
                        v-model="store.contactInformation.email[1]" :disabled="edit" />
                </div>
            </form>
            <div class="admin-contact__buttons-wrapper">
                <button class="admin-contact__button primary-button " @click="onEdit"
                    :style="edit ? '' : 'display:none'">Edit</button>
                <button class="admin-contact__button primary-button " @click="onSubmit"
                    :style="edit ? 'display:none' : ''">Apply</button>
                <button class="admin-contact__button button-cancel primary-button" @click="onCancel"
                    :style="edit ? 'display:none' : ''">Cancel</button>
            </div>
        </div>
    </section>
    <div class="loader" v-else>
        <Loader />
    </div>
</template>

<style lang="scss" scoped>
.admin-contact {
    &__container {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 3rem 5rem 8.95rem;
        gap: 3rem;
    }

    &__form-wrapper {
        display: flex;
        flex-wrap: wrap;
        column-gap: 5rem;
        row-gap: 2rem;
        justify-content: space-between;

    }

    &__city-country-wrapper {
        display: flex;
        justify-content: space-between;
    }

    &__field {
        display: flex;
        flex-direction: column;
        width: 45%;
        gap: 22px;
    }

    &__svg-wrapper {
        display: flex;
        padding-right: 10px;
    }

    &__svg {
        width: 18px;
        cursor: pointer;
    }

    &__label-wrapper {
        display: flex;
        justify-content: space-between;
    }

    &__label {
        padding: 1rem;
        width: 100%;
        background-color: var(--color-old-lace);
    }

    &__input {
        padding: 12px 12px;
        border: 1px solid var(--color-quick-silver);
        border-radius: 10px;
        font-size: 14px;
        margin-bottom: 2px;
        resize: none;

        &:focus {
            border: 1px solid var(--color-uc-gold);
        }

        &:disabled {
            background-color: var(--color-cultured);
            color: var(--color-quick-silver);
        }
    }

    &__time-wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
    }

    &__hours-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;

    }

    &__buttons-wrapper {
        display: flex;
        justify-content: end;
        gap: 2rem;
    }

    &__button {
        border-radius: 1rem;
        padding: 1.4rem 9rem;
    }

}

.button-cancel {
    border: 1px solid var(--color-candy-pink);
    background-color: var(--color-candy-pink);

    &:hover {
        background-color: var(--color-white);
        color: var(--color-candy-pink);
    }
}

.errorfield {
    border: 1px solid var(--color-candy-pink);
}

@media only screen and (max-width:991px) {
    .admin-contact {
        &__field {
            width: 100%;
        }

        &__city-country-wrapper {
            display: flex;
            flex-direction: column;
            gap: 22px;
        }

        &__svg {
            width: 15px;
        }

        &__buttons-wrapper {
            justify-content: center;
        }

        &__time-wrapper {
            grid-template-columns: 1fr 3fr;
        }
    }
}

@media only screen and (max-width:575px) {
    .admin-contact {
        &__container {
            padding: 1.5rem 3rem 3rem 3rem;
        }

        &__name-text {
            font-size: 32px;
        }

        &__form-wrapper {
            width: 100%;
        }

        &__time-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;


        }

        &__buttons-wrapper {
            flex-direction: column;
        }

        &__button {
            width: 100%;
        }

        &__hours-wrapper {
            gap: 0.2rem;
            grid-row: 2;
        }
    }
}
</style>