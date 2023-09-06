import React from 'react'

const Container = (props) => {
  return (
    <section>
        <div className={ props.class1 }>
            { props.children }
        </div>
    </section>
  )
}

export default Container