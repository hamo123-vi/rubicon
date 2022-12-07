import { Component } from "react";
import no_preview from '../images/no-preview.jpeg';

export type Props = {
    id: number,
    name: string,
    media: string,
    tab: string
}

export type State = {
    id: number,
    name: string,
    media: string,
    tab: string
}

class Card extends Component<Props, State> {

    state: State = {
        id: 0,
        name: '',
        media: '',
        tab: ''
    }

    componentDidMount(): void {

        this.setState(() => ({
            name: this.props.name,
            media: this.props.media
        }))
    }

    render() {
        return(
            <>
                {}
                <img className="card_image" alt='' src={this.props.media ? `https://image.tmdb.org/t/p/w500${this.props.media}`: no_preview} />
                <div className="card_title">
                    <p className="title">
                        {this.props.name}
                    </p>
                    
                </div>
            </>
        )
    }
}

export default Card