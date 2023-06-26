const withStyles = (Component) => {
    return (props) => {
        const style = {
            padding: '0.2rem',
            margin: '1rem',
            backgroundColor: 'red',
        }
        console.log(props);
        return <Component style={style} {...props}  />
    }
}

export default withStyles;
