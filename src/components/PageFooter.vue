

<script>
import GenericLink from '@/components/generics/GenericLink.vue'
    export default {
        components: {
        GenericLink
    } 
    }
</script>
<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__info">
                <span class="text-lg" >Furniro.</span>
                <p >400 University Drive Suite 200 Coral <br>
                    Gables,<br>
                    FL 33134 USA</p>
            </div>
            <div class="footer__links">
                <h1 class="text-md">Links</h1>
                <ul>
                    <li><generic-link href="#" text-content="Home" container-class="navigation__links-item"></generic-link></li>
                    <li><generic-link href="#" text-content="Shop" container-class="navigation__links-item"></generic-link></li>
                    <li><generic-link href="#" text-content="Contact" container-class="navigation__links-item"></generic-link></li>
                </ul>
            </div>
            <div class="footer__help">
                <h1>Help</h1>
                <ul>
                    <li><generic-link href="#" text-content="Payment Options" container-class="navigation__links-item"></generic-link></li>
                    <li><generic-link href="#" text-content="Returns" container-class="navigation__links-item"></generic-link></li>
                    <li><generic-link href="#" text-content="Privacy Policies" container-class="navigation__links-item"></generic-link></li>
                </ul>
            </div>
            <div class="footer__newsLetter">
                <h1 class="text-md">Newsletter</h1>
                <form action="submit" class="text-sm">
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
            line-height: 2rem;
            margin: 0;
        }  
    }        
    p{
        margin: 0;
        color: var(--color-quick-silver)
    }
        
    &__links{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        ul{
            display: flex;
            flex-direction: column;
            gap: 3rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li{
            list-style: none;
        }
        h1{
            color: var(--color-quick-silver);
            --tw-text-opacity: 1;
            font-weight: 500;
            margin: 0;
        }     
    }        
    &__help{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        ul{
            display: flex;
            flex-direction: column;
            gap: 3rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li{
            list-style: none;
        }
        h1{
            color: var(--color-quick-silver);
            --tw-text-opacity: 1;
            font-weight: 500;
            margin: 0;
        }          
    }
    &__newsLetter{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        h1{
            --tw-text-opacity: 1;
            color: var(--color-quick-silver);
            font-weight: 500;
            margin: 0;
        }
        form{
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
            border-bottom: 1px solid var(--color-black); 
            &:focus{
                --tw-border-opacity: 1;
                outline: none; 
                border-bottom: 1px solid var(--color-black); 
            }
        }
        button{
            font-weight: 500;
            cursor: pointer;
            width: fit-content;
            --tw-border-opacity: 1;
            border: none; 
            border-bottom: 1px solid var(--color-black);
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