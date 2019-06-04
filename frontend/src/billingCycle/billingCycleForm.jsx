import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Summary from './summary';



import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList';



class BillingCycleForm extends Component {

  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    }
  }

  render() {

    const { handleSubmit, readOnly, credits, debts } = this.props
    const {sumOfCredits, sumOfDebts} = this.calculateSummary()
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={labelAndInput} readOnly={readOnly}
            label='Nome' placeholder='Informe o nome' cols='12 4' />
          <Field name="month" component={labelAndInput} readOnly={readOnly}
            label='Mês' placeholder='Informe o mês' cols='12 4' type='number' />
          <Field name="year" component={labelAndInput} readOnly={readOnly}
            label='Ano' placeholder='Informe o ano' cols='12 4' type='number' />

          <Summary credit={sumOfCredits} debt={sumOfDebts} />

          <ItemList cols='12 6' readOnly={readOnly} list={credits}
            field='credits' legend='Créditos' />
          <ItemList cols='12 6' readOnly={readOnly} list={debts}
            field='debts' legend='Débitos' showStatus={true} />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>

          <button type='button' className='btn btn-default'
            onClick={this.props.init} > Cancelar </button>
        </div>
      </form>
    );
  }
}



BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
//Aqui seleciono o ID pra ser utilizado no outro form
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)

