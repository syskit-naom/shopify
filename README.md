# NAOM Shop
#### Shopify theme

***
## Develop

#### Get started

```sh

# install
pnpm i --frozen-lockfile

# develop locally with tailwind cli running
pnpm dev
```


#### Good to know

> When working with Shopify themes there's no convenient built in version control on the Shopify side.
> Instead we use multiple [theme instances (copies)](https://admin.shopify.com/store/f7e1c6-47/themes), that each reflect a state of changes, similar to regular branches.

> Only one (1) theme instance can be live/published at the time. 
> It's generally a better practise to update an already published instance than to replace it by publishing a non-live theme instance.

> Only the live "shopify/main" theme instance is (at the moment of writing) connected to this repo's main branch. 
> This means that changes pushed to the remote main branch will update the theme instance automatically. 
> Also vice versa: changes made to the theme directly through the Shopify dashboard (either by editing code or using the customizer) will automatically update the github branch.

#### Working with theme instances as branches
> 1. In the Shopify dashboard, duplicate the live theme instance
>>
> 2. Rename your new theme instance to something that makes it clear it's your "dev branch" 
>>
> 3. Clone this repo and bring the main branch changes into a new branch with a name that can be associated with your new theme instance
>>
> 4. Do some changes locally and push them to:
> a. your theme instance using Shopify CLI (to see updates reflected in Shopify)
> b. your remote branch on github (for the sake of version control)
>>
> 5. When you're ready to update the live theme instance: instead of pushing directly via Shopify CLI we recommend merging into the main github branch, which will automatically update the live theme instance. This, again, for the sake of consistent version control.

#### Shopify CLI
```sh
# IMPORTANT NOTE: pulling theme code overwrites non-theme files (e.g. `package.json`). 
# Make sure you restore the file/ignore that change after every executed pull.

# pull theme changes from theme instance
pnpm theme-pull

# push local changes to theme instance
pnpm theme-push

# see `package.json` for additional commands
```

**Relevant sources**
+ [Shop admin dashboard](https://admin.shopify.com/store/f7e1c6-47)
+ [Shop frontend](https://store.naom.co/)
>
+ [Shopify Liquid VSC Extension](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode)
+ [Installing Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)
+ [Shopify.dev (docs)](https://shopify.dev/docs)