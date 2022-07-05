import { styled } from '../../UI/Stitches'

export const Container = styled('section', {
    backgroundColor: '$primary',
    color: '$secondary',
    textAlign: 'center',
    padding: '2rem',

    h1: {
        padding: '2rem'
    },

    '> a': {
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '.5rem',
        padding: '1.5rem',
        marginTop: '2rem',
        backgroundColor: '$black',
        transition: 'all $slow ease-in-out',

        button: {
            color: '$secondary',
            fontSize: '$medium',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer'
        },

        '&:hover': {
            backgroundColor: '$secondary',
            boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',

            button: {
                color: '$primary'
            }
        }
    },
    length: 0
})

export const Cards = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5rem',
    gap: '1.5rem',

    button: {
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        fontWeight: '500',
        borderRadius: '.5rem',
        marginTop: '1.5rem',
        padding: '1rem 4rem',
        backgroundColor: '$secondary',
        transition: 'all $slow ease-in-out',

        a: {
            color: '$primary',
            fontWeight: '500'
        },

        '&:hover': {
            backgroundColor: '$black',
            color: '$secondary',
            boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',

            a: {
                color: '$secondary'
            }
        }
    },

    '.fix-button': {
        marginTop: '2.7rem'
    },

    '.laletra-button': {
        marginTop: '3.7rem'
    },

    '@m': {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    length: 0
})

export const Card = styled('div', {
    backgroundColor: '$black',
    width: '20rem',
    height: '20rem',
    padding: '1rem',
    borderBottom: '1px solid transparent',
    borderRadius: '0.5rem',
    transition: 'all $medium ease-in-out',
    justifyContent: 'center',

    '&:hover': {
        backgroundColor: '$primary',
        boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',
        transform: 'scale(1.05)'
    },

    h2: {
        marginTop: '$8'
    },

    p: {
        marginTop: '$6',
        maxWidth: '75ch',
        textOverflow: 'ellipsis',
        color: '$tertiary',
        textAlign: 'center'
    },

    '@m': {
        width: '26rem',
    },
    length: 0
})
