import { PureComponent } from "react";
import SortAndFilter from "./SortAndFilter";
import TextFilter from "./TextFilter";

class SortAndFilterUI extends PureComponent {
	state = {
		isTextVisible: true
	};

    handleEdit = () =>
		this.setState({
			isTextVisible: false
		});

        handleChange = (data) => {
            this.props.onChange(data);
            this.handleShowText();
        };
    
        handleShowText = () =>
            this.setState({
                isTextVisible: true
            });

	render() {
		const { onChange, ...rest } = this.props;
		const { isTextVisible } = this.state;
		
		return isTextVisible ? (
			<TextFilter {...rest} onEdit={this.handleEdit} />
		) : (
			<SortAndFilter {...rest} onCancel={this.handleShowText} onChange={this.handleChange} />
		);
	}
}

export default SortAndFilterUI;