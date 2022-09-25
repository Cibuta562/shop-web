export const form = [
    {
        section: 1,
        items: [
            {
                label: 'username',
                type: 'text',
                value:'username'
            },
            {
                label: "password",
                type: 'password',
                value:'password'
            }
        ]
    },
    {
        section: 2,
        items: [
            {
              label: 'PLease complete this information for the delivery address',
              type: 'information',
              value: 'address'
            },
            {
                label: 'Country',
                type: 'text',
                value: 'country'
            },
            {
                label: 'City',
                type: 'text',
                value: 'city'
            },
            {
                label: 'Street',
                type: 'text',
                value: 'street'
            },
            {
                label: "Number",
                type: 'text',
                value: 'number'
            }
        ]
    },
    {
        section: 3,
        items: [
            {
                label: 'Just one more step! If you are ready click submit',
                type: 'information'
            }
        ]
    }
]