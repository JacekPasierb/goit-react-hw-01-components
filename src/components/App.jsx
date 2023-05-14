import  Profile  from './Profile/Profile.jsx';
import  Statistics  from './Statistics/Statistics.jsx';
import user from './Profile/user';
import data from './Statistics/data';
import  FriendList  from './FriendList/FriendList.jsx';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';
import  TransactionHistory  from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
