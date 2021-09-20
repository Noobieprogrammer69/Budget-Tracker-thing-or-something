import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try saying: <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '₱100 '  : '₱50 '}
            in Category Business {isIncome ? 'Mangutang ' : 'Utang-kay-marites '}
            for {isIncome ? 'Saturday ' : 'Monday '}
        </div>
    )
}

export default InfoCard
