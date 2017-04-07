import React, { Component } from 'react';
import * as Mui from 'material-ui';
import { Link } from 'react-router';
class BloodRequired extends Component {
    constructor(props) {
        super(props);
        this.bloodgroups = [
            "A+",
            "B+",
            "AB+",
            "AB-",
            "A-",
            "B-",
            "O+",
            "O-"
        ]

        this.state = { app: '', gender: 'male', bloodRequired: 'A+' };
        this.handleBloodTypeChange = this.handleBloodTypeChange.bind(this);

        this.needBlood = this.needBlood.bind(this);

    }
    handleBloodTypeChange = (event, index, value) => {
        this.setState({ bloodRequired: value }); console.log(value)
        this.props.bloodRequest(value);

    };

    componentDidMount() {
        setTimeout(() => {
            this.props.bloodRequest()

        }, 10);

    }

    logoutRequest = () => {
        this.props.logoutRequest();
    }




    needBlood(currentBlood) {
        if (this.state.bloodRequired === 'A+') {
            if (currentBlood === 'O-' || currentBlood === 'O+' || currentBlood === 'A-' || currentBlood === 'A+') {
                return true;
            }
        }
        if (this.state.bloodRequired === 'B+') {
            if (currentBlood === 'AB+' || currentBlood === 'B+') {
                return true;
            }
        }
        if (this.state.bloodRequired === 'AB+') {
            if (currentBlood === 'AB+') {
                return true;
            }
        }
        if (this.state.bloodRequired === 'AB-') {
            if (currentBlood === 'AB-' || currentBlood === 'AB+') {
                return true;
            }
        }
        if (this.state.bloodRequired === 'A-') {
            if (currentBlood === 'A-' || currentBlood === 'A+' || currentBlood === 'AB+' || currentBlood === 'AB-') {
                return true;
            }
        }
        if (this.state.bloodRequired === 'B-') {
            if (currentBlood === 'B+' || currentBlood === 'AB+') {
                return true;
            }
        }
        if (this.state.bloodRequired === 'O+') {
            if (currentBlood === 'B+' || currentBlood === 'A+' || currentBlood === 'AB+' || currentBlood === 'O+') {
                return true;
            }
        }
        if (this.state.bloodRequired === 'O+') {
            if (currentBlood === 'B+' || currentBlood === 'A+' || currentBlood === 'AB+' || currentBlood === 'O+' || currentBlood === 'B-' || currentBlood === 'A-' || currentBlood === 'AB-' || currentBlood === 'O-') {
                return true;
            }
        }



    }

    render() {
        const style = {
            height: 20,
            width: 550,

        };
        const style1 = {
            backgroundColor: '#00BCD4',
            textAlign: 'center',

        };
        const style2 = {
            marginTop: 10
        }

        console.log("this.props", this.props);
        const app = this.props && this.props.app && this.props.app.donordetail ? this.props.app.donordetail : [];
        console.log("complete data ", app)
        return (
            <div>
                <Mui.AppBar
                    title="Blood Bank Management App"
                    showMenuIconButton={false}

                > <Link to="/" ><Mui.FlatButton type="submit" label="Logout" backgroundColor="transparent" style={style2} onClick={this.logoutRequest} /> </Link> </Mui.AppBar>

                <div>
                    <Mui.Paper style={style1} zDepth={3} >
                        <div>
                            <br />
                            <h1> Search Required blood</h1>
                            <Mui.SelectField
                                ref="bloodRequired"
                                name="bloodRequired"
                                floatingLabelText="Required Blood Type"
                                onChange={this.handleBloodTypeChange}
                                value={this.state.bloodRequired}
                                style={style}
                                required={true}
                            >
                                {
                                    this.bloodgroups.map(bloodgroup => {
                                        return <Mui.MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup} />
                                    })
                                }
                            </Mui.SelectField>
                        </div>
                        {app && app.length > 0 ?
                            <Mui.Table
                                adjustForCheckbox={false}
                                displayRowCheckbox={false}>
                                <Mui.TableHeader
                                    adjustForCheckbox={false}
                                    displaySelectAll={false}>
                                    <Mui.TableRow>

                                        <Mui.TableHeaderColumn>Number</Mui.TableHeaderColumn>
                                        <Mui.TableHeaderColumn>Picture</Mui.TableHeaderColumn>
                                        <Mui.TableHeaderColumn>Name</Mui.TableHeaderColumn>
                                        <Mui.TableHeaderColumn>Blood Type</Mui.TableHeaderColumn>
                                        <Mui.TableHeaderColumn>Address</Mui.TableHeaderColumn>
                                        <Mui.TableHeaderColumn>Contact Number</Mui.TableHeaderColumn>
                                        <Mui.TableHeaderColumn></Mui.TableHeaderColumn>

                                    </Mui.TableRow>
                                </Mui.TableHeader>
                                <Mui.TableBody displayRowCheckbox={false}>
                                    {app.map((data, index) => {
                                        if (this.needBlood(data.bloodType)) {
                                            return (
                                                <Mui.TableRow key={index} selectable={false}>
                                                <Mui.TableRowColumn>{index + 1}</Mui.TableRowColumn>
                                                <Mui.TableHeaderColumn><Mui.Avatar
                                                      src={data.gender == '1' ? "http://www.cablesyequipos.net/images/avatar.png" : "http://graphicalx.com/img/female-avatar.jpg"}
                                                      
                                                /></Mui.TableHeaderColumn>
                                                <Mui.TableRowColumn>{data.name}</Mui.TableRowColumn>
                                                <Mui.TableRowColumn>{data.bloodType}</Mui.TableRowColumn>
                                                <Mui.TableHeaderColumn>{data.address}</Mui.TableHeaderColumn>
                                                <Mui.TableRowColumn>{data.contactNo}</Mui.TableRowColumn>
                                                <Mui.TableHeaderColumn><Mui.RaisedButton type="button" label="Available" primary={true} /></Mui.TableHeaderColumn>
                                                </Mui.TableRow>
                                            );
                                        }
                                    })}
                                </Mui.TableBody>
                            </Mui.Table>
                            : null}
                    </Mui.Paper>
                </div>
            </div>
        );
    }
}
export default BloodRequired;