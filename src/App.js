import React from 'react';


const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={`icon fa ${props.icon} card__descriptionIcon`}></div>
            <div className="card__descriptionText">
                {props.children}
            </div>
        </div>
        <div className="card__price">{props.price}</div>
    </div>
);
//uninstall beautify and intall prettier as an extension...

const CardDescription = props => (
    <div>{props.description}
    {/* null is absense of obj, and react likes null if not there */}
    {props.hint && <br/>}
    {props.hint && <span>{props.hint}</span>}
    </div>
)

const App = () => (
    <CardGroup>
        <Card icon="fa-thumbs-o-up" price="Free!" hint="">
            <CardDescription description="Trial"/>
        </Card>
        <Card icon="fa-trophy" price="$10.00">
            <CardDescription description="Basic tier" hint="(most popular)"/>
        </Card>
        <Card icon="fa-bolt" price="$6,000.00">
            <CardDescription description="Advanced tier" hint="(only for enterprise-level professionals)"/>
        </Card>
    </CardGroup>
);

export default App;
