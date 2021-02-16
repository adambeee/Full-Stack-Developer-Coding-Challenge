import React, { useEffect } from 'react';

export default function Dashboard() {
    return (
    <>
        <div className="grid-zone grid-zone--sidebar">
            <div className="grid-zone__content">
                this is the alert panel
            </div>
        </div>
        <main className="grid-zone grid-zone--main">
		<div className="grid-zone__content">
            <div className="grid-zone inner-grid">
                <div className="grid-zone grid-zone--main__content__upper">
                    <div className="grid-zone__label current-contacts">
                        Current Contacts
                    </div>
                    <div className="grid-zone__content">
                        this is going to be contacts table
                    </div>
                </div>
                <div className="grid-zone grid-zone--main__content__lower ">
                    <div className="grid-zone__label contacts-summary">
                        Contacts Summary
                    </div>
                    <div className="grid-zone__content">
                        this is going to be summary
                    </div>
                </div>
            </div>
		</div>
	</main>
    </>
    )
}


