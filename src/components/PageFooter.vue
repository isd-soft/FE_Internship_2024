

<script setup>
import GenericLink from '@/components/generics/GenericLink.vue'
import GenericList from '@/components/generics/GenericList.vue'
    const links=[
        {
            href:"#" ,
            textContent:"Home",
            containerClass:"navigation__links-item"  
        },
        {
            href:"#" ,
            textContent:"Shop",
            containerClass:"navigation__links-item"  
        },
        {
            href:"#" ,
            textContent:"Contact",
            containerClass:"navigation__links-item"  
        }
    ]
    const helpLinks=[
    {
            href:"#" ,
            textContent:"Payment Options",
            containerClass:"navigation__links-item"  
        },
        {
            href:"#" ,
            textContent:"Returns",
            containerClass:"navigation__links-item"  
        },
        {
            href:"#" ,
            textContent:"Privacy Policies",
            containerClass:"navigation__links-item"  
        }
    ]
</script>
<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__info">
                <span >Furniro.</span>
                <p >400 University Drive Suite 200 Coral <br>
                    Gables,<br>
                    FL 33134 USA</p>
            </div>
            <div class="footer__links">
                <h1>Links</h1>
                <GenericList :items="links" customClass="footer__link-list">
                    <template v-slot="{ item }">
                        <GenericLink v-bind="item"/>
                    </template>
                </GenericList>
            </div>
            <div class="footer__help">
                <h1>Help</h1>
                <GenericList :items="helpLinks" customClass="footer__link-list">
                    <template v-slot="{ item }">
                        <GenericLink v-bind="item"/>
                    </template>
                </GenericList>
            </div>
            <div class="footer__newsLetter">
                <h1>Newsletter</h1>
                <form action="submit">
                    <input type="text" placeholder="Enter your Email Address"/>
                    <button type="submit">SUBSCRIBE</button>  
                </form>
            </div>
        </div>
        <div class="footer__bottom">
            <hr>
            <p>2024 furniro. All rights reserved</p>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer{
    --tw-border-opacity: 1;
    &__content{
        padding: 5rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 2rem;
    }
    &__info{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        span{
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2rem;
            margin: 0;
        }  
    }        
    p{
        margin: 0;
        color: rgb(159 159 159)
    }
        
    &__links{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        h1{
            color: rgb(159 159 159);
            --tw-text-opacity: 1;
            font-weight: 500;
            font-size: 20px;
            margin: 0;
        }     
    }        
    &__help{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        h1{
            color: rgb(159 159 159);
            --tw-text-opacity: 1;
            font-weight: 500;
            font-size: 20px;
            margin: 0;
        }          
    }
    &__link-list{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    &__newsLetter{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        h1{
            --tw-text-opacity: 1;
            color: rgb(159 159 159);
            font-weight: 500;
            font-size: 20px;
            margin: 0;
        }
        form{
            font-size: .875rem;
            line-height: 1.25rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
        input{
            width: 13rem;
            --tw-border-opacity: 1;
            border: none; 
            border-bottom: 1px solid black; 
            &:focus{
                --tw-border-opacity: 1;
                outline: none; 
                border-bottom: 1px solid black; 
            }
        }
        button{
            font-weight: 500;
            cursor: pointer;
            width: fit-content;
            --tw-border-opacity: 1;
            border: none; 
            border-bottom: 1px solid black;
            background-color: transparent;
            background-image: none;
            text-transform: none;
        }
    }
    &__bottom{
        margin-left: 5rem;
        margin-right: 5rem;
        p{
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
        }
    }       
}
.navigation__links-item{
    color: black;
}
</style>