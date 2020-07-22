import React, { Component } from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ChartsFacebook2017 from "../../../components/Charts/ChartsFacebook2017";
import Footer from "../../../components/Layouts/Footer";

class Charts extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Charts"
                    breadcrumbTextOne="Explore"
                    breadcrumbTextTwo="Facebook, Inc."
                    breadcrumbUrl="/explore"
                />
                <ChartsFacebook2017 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Charts;