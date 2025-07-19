import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductForm from './ProductForm';
import ConfirmModal from '../../components/ConfirmModal';

export default function EditProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [modal, setModal] = useState({ open: false, action: null });
  const [pendingForm, setPendingForm] = useState(null);

  if (!product) {
    navigate('/products');
    return null;
  }

  const handleSubmit = (form) => {
    setPendingForm(form);
    setModal({ open: true, action: 'update' });
  };

  const handleCancel = () => {
    setModal({ open: true, action: 'cancel' });
  };

  const handleConfirm = () => {
    if (modal.action === 'update') {
      navigate('/products', { state: { updatedProduct: { ...product, ...pendingForm } } });
    } else if (modal.action === 'cancel') {
      navigate('/products');
    }
    setModal({ open: false, action: null });
    setPendingForm(null);
  };

  const handleModalCancel = () => {
    setModal({ open: false, action: null });
    setPendingForm(null);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 md:mt-8 mt-4">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-700">Edit Product</h1>
      <ProductForm
        initialValues={product}
        onSubmit={handleSubmit}
        submitLabel="Update Product"
        onCancel={handleCancel}
      />
      <ConfirmModal
        open={modal.open}
        title={modal.action === 'update' ? 'Update Product' : 'Cancel Edit Product'}
        message={modal.action === 'update' ? 'Are you sure you want to update this product?' : 'Are you sure you want to cancel editing this product?'}
        onConfirm={handleConfirm}
        onCancel={handleModalCancel}
        confirmLabel={modal.action === 'update' ? 'Update' : 'Cancel'}
      />
    </div>
  );
} 