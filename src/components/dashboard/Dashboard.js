import React from 'react'
import "./Dashboard.css"
// import Card from '../card/Card';
import Reports from '../reports/Reports';
import RecentSales from '../reports/RecentSales';
import TopSealing from '../topsealing/TopSealing';
import RecentActivity from '../recentActivity/RecentActivity';
import BudgetReport from '../budgetPart/BudgetReport';
import WebTrafic from '../webtrafic/WebTrafic';
import News from '../news/News';
import Cards from '../card/Cards';
function Dashboard() {

    // const [cards, setCards]= useState([])

    // const fetchData= ()=>{
    //     fetchData('http://localhost:4000/cards')
    //     .then(res=> res.json())
    //     .then(data =>{
    //         setCards(data);
    //     })
    //     .catch(e=> console.log(e.message));
    // };
    // useEffect(()=> {
    //     fetchData();
    // }, [])

    // useEffect(()=>{
    //     fetch("http://localhost:4000/cards")
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data=>{
    //         setCards(data);
    //     })
    // })
  return (
    <section className='dashboard section'>
        <div className='row'>
            <div className='col-lg-8'>
                <div className='row'>
                 <Cards />

                    <div className='col-12'>
                        <Reports />

                    </div>

                    <div className='col-12'>
                      <RecentSales />

                    </div>
                    
                    <div className='col-12'>
                    <TopSealing />

                    </div>

                </div>

            </div>

            <div className='col-lg-4'>
                <RecentActivity />
                <BudgetReport />
                <WebTrafic />
                <News />
                
            </div>

        </div>

    </section>
  )
}

export default Dashboard
