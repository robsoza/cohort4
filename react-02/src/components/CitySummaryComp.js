import React from 'react';

function CitySummaryComp(props) {
    let data = [];

    if (props.community) {
        Object.keys(props.community).forEach(key => {
            data.push({
                city: props.community[key].city,
                latitude: props.community[key].latitude,
                population: props.community[key].population
            });
        });
    };

    let total, northern, southern;
    if (data.length > 0) {
        total = data.map(c => c.population);
        total = total.reduce((a, b) => Number(a) + Number(b));
        total = Number(total).toLocaleString();

        northern = data.sort((a, b) => { return b.latitude - a.latitude });
        northern = data[0].city;

        southern = data.sort((a, b) => { return a.latitude - b.latitude });
        southern = data[0].city;
    };

    return (
        <div>
            <fieldset id="his">
                <legend>Community Summary</legend>
                <table className="customers">
                    <tbody>
                        <tr>
                            <th>Population Total:</th>
                            <th>Northern City:</th>
                            <th>Southern City:</th>
                        </tr>
                        <tr>
                            <td>{total}</td>
                            <td>{northern}</td>
                            <td>{southern}</td>
                        </tr>
                    </tbody>
                </table>
                <div id="city-history"> </div>
            </fieldset>
        </div>
    )
}

export default CitySummaryComp;