// Beispiele
// const myElement = React.createElement(
//     'p',
//     {},
//     'Das ist meine erste React Komponente'
// );

// ReactDOM.render(
//     myElement,
//     document.getElementById('react-app')
// );

// const myJSXElement = <p> Das ist meine erste JSX Komponente </p>

// ReactDOM.render(
//     myJSXElement,
//     document.getElementById('react-app')
// );
//

import { Paragraph } from './Paragraph';
import { Headline } from './Headline';
import { Message } from './Message';

export class App extends React.Component {
    render() {

        const delimeter = ";";

        const values = [
            { "text": "Hello", "color": "red", "fontsize": "12px" },
            { "text": "World", "color": "green", "fontsize": "24px" },
            { "text": "My friend", "color": "blue", "fontsize": "48px" }
        ];

        const messages = [
            { "values": "Awesome;48px;red;center=true" },
            { "values": "Amazing;64px;green;center=false" },
            { "values": "Incredible;96px;blue;center=true" },
            { "values": "Apple is to expensive !!!;100px;hotpink;center=false" }
        ];

        // Example on Object 
        // const myObject = {
        //     "text": [
        //         { "value": "Hallo Welt" },
        //         { "value": "Hello World" }
        //     ],
        //     "color": [
        //         { "value": "red" }
        //     ],
        //     "fontsize": [
        //         {"value":"100px"}
        //     ]
        // };
        //

        const obj = messages[this.randomNumber()].values.split(delimeter);

        // Code Example
        // const message = myObject.text[0].value;
        // const fontsize = myObject.fontsize[0].value;
        // const color = myObject.color[0].value;

        // const object = [
        //     { "message": "" },
        //     { "fontsize": "" },
        //     { "color": "" },
        //     { "alignment": "" }
        // ];

        // for (var i = 0; i < obj.length; i++) {
        //     object[i] = obj[i];
        // }
        //

        const message = obj[0];
        const fontsize = obj[1];
        const color = obj[2];
        const alignment = obj[3] == "center=true" ? "center" : "none";

        return (
            <>

                <Headline
                    showbackground="true"
                    color="white"
                    fontsize="48px"
                    centered="true"
                    text="Hello World"
                />

                <Headline
                    showbackground="false"
                    color="black"
                    fontsize="48px"
                    centered="true"
                    text="Hello World"
                />

                <div style={{ "text-align": "center" }}>
                    {values.map((item, index) => {
                        return <Paragraph
                            fontsize={item.fontsize}
                            color={item.color}
                            text={item.text}
                            key={index}
                        />
                    })}
                </div>

                <Message
                    centered="true"
                    headline="This is an important message"
                    text="Really?"
                />

                <Paragraph
                    alignment={alignment}
                    color={color}
                    fontsize={fontsize}
                    text={message}
                />

            </>
        );
    }

    randomNumber() {
        return Math.random() > .33 ? 0 : Math.random() > .66 ? 1 : Math.random() > .75 ? 2 : 3;
    }
}