const Events = ({ events }: {events: string[]}) => {
    return (
        <ul>
            <>
            {
                events.map((e, index) => {
                    <li key={index}>{e}</li>
                })
            }
            </>
        </ul>
    )
}

export default Events;