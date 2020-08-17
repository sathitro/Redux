import React from 'react';

export default function BootStapTest() {
    return (
        <div>
            <h1 style={{backgroundColor:"yellow"}}>Bootstrap Below.</h1>
            <button type="button" className="btn btn-outline-primary">Primary</button>
            <button type="button" className="btn btn-outline-secondary">Secondary</button>
            <button type="button" className="btn btn-outline-success">Success</button>
            <button type="button" className="btn btn-outline-info">Info</button>
            <button type="button" className="btn btn-outline-warning">Warning</button>
            <button type="button" className="btn btn-outline-danger">Danger</button>
            <button type="button" className="btn btn-outline-dark">Dark</button>
            <button type="button" className="btn btn-outline-light text-dark">Light</button>
        </div>
    )
}
