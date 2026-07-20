<?php $__env->startSection('title', 'My Profile'); ?>

<?php $__env->startSection('content'); ?>
    <div id="customer-profile-root" data-profile='<?php echo json_encode($profileData, 15, 512) ?>'></div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
    <?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
<?php $__env->stopPush(); ?>
<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /opt/lampp/htdocs/Pothik_React_Laravel/resources/views/customer/profile/index.blade.php ENDPATH**/ ?>