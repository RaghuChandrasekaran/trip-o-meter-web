import cron from 'cron';
import Logger from 'Utilities/logger';

const LOGGER = new Logger(' : Job Scheduler');

export default function createJob(task, cronTime = '00 00 00 * * 0-6') {
  LOGGER.debug(`Creating new job ${task.name}`);
  LOGGER.debug(`Cron pattern ${cronTime}`);
  try {
    const job = new cron.CronJob({
      cronTime,
      onTick() {
        task();
      },
      start: false,
      runOnInit: true,
    });
    return job;
  } catch (error) {
    LOGGER.error(error);
  }
  return false;
}
