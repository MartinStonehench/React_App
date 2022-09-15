import { Headline } from './Headline';
import { Paragraph } from './Paragraph';

// Function 
// export function Message(props) {
//     const style = { 
//         "text-align": props.centered == "true" ? "center" : "none"
//     };

//     return (
//         <div style={style}>
//             <Headline text={props.headline} />
//             <Paragraph text={props.text} />
//         </div>
//     );
// }
//

export class Message extends React.Component { 
    render() {
        const style = { 
            "text-align": this.props.centered == "true" ? "center" : "none"
        };
    
        return (
            <div style={style}>
                <Headline text={this.props.headline} />
                <Paragraph text={this.props.text} />
            </div>
        );
    }
} 