const stats = {
  totalRequests: 0,
  codeGenerated: 0,
  bugsDebugged: 0,
  explanations: 0,
  activeUsers: new Set(),
  startTime: Date.now(),
  recentActivity: []
};

function logActivity(chatId, type) {
  stats.totalRequests++;
  stats.activeUsers.add(chatId);
  
  if (type === 'code') stats.codeGenerated++;
  if (type === 'debug') stats.bugsDebugged++;
  if (type === 'explain') stats.explanations++;
  
  stats.recentActivity.unshift({
    chatId,
    type,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 50 activities
  if (stats.recentActivity.length > 50) {
    stats.recentActivity.pop();
  }
}

module.exports = { stats, logActivity };