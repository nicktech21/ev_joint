import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { VendorActions } from "stores/VendorStore/vendorAction"

const mapStateToProps = (state) => {
    return {
        vendorsdata: state.Vendors.VendorList,
        
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   
    getVendor: VendorActions.getVendor,

}, dispatch);

const VendorStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default VendorStore;