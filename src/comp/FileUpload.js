import React, {Component} from 'react';
import myApiService from "../api/apiService";

class FileUpload extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor Props")
        console.log(this)

    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
        console.log("Update")
        console.log(this.state)
    }

    componentDidMount() {
        console.log("componentDidMount")
        console.log("PropsID")
        console.log(this.props.id)

        let res = myApiService.getPicturePath(this.props.id).then(response => {
            console.log(this.props)
            console.log("Record")
            console.log(response.data.picture_path)
            this.setState({picturePath: response.data.picture_path});
        }).catch(error => {
            console.log(error);
        });


    }

    state = {

        // Initially, no file is selected
        selectedFile: null,
        filename: ''
    };

    // On file select (from the pop up)
    onFileChange = event => {
        console.log("und nun")
        // Update the state
        this.setState({selectedFile: event.target.files[0]});
        this.setState({selectedFile: event.target.files[0]});
        this.setState({usedFile: event.target.files[0]});
        this.setState({filename: event.target.files[0].name});

    };

    // On file upload (click the upload button)
    onFileUpload = () => {
        console.log(this.props.id)
        console.log("State")

        console.log(this.state)

        // Create an object of formData
        const formData = new FormData();
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Accept': 'multipart/form-data'
            }
        }
        // Update the formData object
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name,
            this.state.filename
        );

        // Details of the uploaded file

        // Request made to the backend api
        // Send formData object
        myApiService.uploadPic(formData, this.state.selectedFile.name, config, this.props.id)
        console.log("Setttign picture Path L  " + this.state.selectedFile.name )
        this.setState({picturePath: 'http://o.ssystems.de/images/' + this.state.selectedFile.name})
        window.location.reload(true);
        //myApiService.persistPicForQuestion(this.props.id, this.state.selectedFile.name)

    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br/>
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (

            <div>
                <div className="smooth-image-wrapper">
                    <img width={100} height={100}
                        src={this.state.picturePath}
                        alt={this.state.picturePath}
                    />
                </div>
                <h1>
                    Upload Pic
                </h1>
                <h3>
                    File Upload using React!
                </h3>
                <div>
                    <input type="file" onChange={this.onFileChange}/>
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}

            </div>
        );
    }
}

export default FileUpload;
