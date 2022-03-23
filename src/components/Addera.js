import { useState } from 'react'







const Addera = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [sort, setSort] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Lägg till vara')
            return
        }

        onAdd({ text, sort, reminder })

        setText('')
        setSort('')
        setReminder(false)


    }

    return (
        <form className='add-form' onSubmit= {onSubmit}>
            <div className="form-control">
                <label>Varor</label>
                <input type='text' placeholder="lägg till varor" value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Specifikation</label>
                <input type='text' placeholder="lägg till specifikation" value={sort}
                    onChange={(e) => setSort(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Påminnelse</label>
                <input type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Spara vara' className="btn btn-block" />


        </form>
    )
}

export default Addera

