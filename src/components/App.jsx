import {Profile} from './Profile/Profile.jsx';
import user from 'data/user.json';
import { Statistics } from './Statistics/Statistics.jsx';
import statisticalData from 'data/data.json';
import { FriendList } from './FriendList/FriendList.jsx';
import friends from 'data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import transactions from 'data/transactions.json';


 export const App = () => {
  return (
    <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />

  <Statistics title ="Upload stats" stats={statisticalData} />

   <FriendList friends={friends} />
   
   <TransactionHistory items={transactions} />
   
   </div>
  )
};
