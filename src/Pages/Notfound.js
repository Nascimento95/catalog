import React, { PureComponent } from 'react'

class Notfound extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h1 className="text-center mt-5">votre page n'existe plus</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notfound